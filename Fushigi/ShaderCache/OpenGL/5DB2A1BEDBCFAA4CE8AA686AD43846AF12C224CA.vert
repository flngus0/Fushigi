#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    int temp_5;
    int temp_6;
    uint temp_7;
    uint temp_8;
    int temp_9;
    precise float temp_10;
    int temp_11;
    uint temp_12;
    int temp_13;
    precise float temp_14;
    int temp_15;
    uint temp_16;
    uint temp_17;
    int temp_18;
    precise float temp_19;
    int temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    int temp_24;
    uint temp_25;
    uint temp_26;
    int temp_27;
    precise float temp_28;
    int temp_29;
    uint temp_30;
    uint temp_31;
    int temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0xEFD87F800807FF06 Ald
    temp_0 = in_attr0.x;
    // 0x000010: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000018: 0xEFD87F800847FF0B Ald
    temp_3 = in_attr0.y;
    // 0x000028: 0xEFD87F800887FF0E Ald
    temp_4 = in_attr0.z;
    // 0x000030: 0x3848000000470007 Shl
    temp_5 = temp_2 << 4;
    // 0x000038: 0xEF95007068070700 Ldc
    temp_6 = temp_5 + 0x680;
    temp_7 = uint(temp_6) >> 2;
    temp_8 = temp_7 >> 2;
    temp_9 = int(temp_7) & 3;
    temp_10 = vp_c7.data[int(temp_8)][temp_9];
    temp_11 = int(temp_7) + 1;
    temp_12 = uint(temp_11) >> 2;
    temp_13 = temp_11 & 3;
    temp_14 = vp_c7.data[int(temp_12)][temp_13];
    // 0x000048: 0xEF95007048070702 Ldc
    temp_15 = temp_5 + 0x480;
    temp_16 = uint(temp_15) >> 2;
    temp_17 = temp_16 >> 2;
    temp_18 = int(temp_16) & 3;
    temp_19 = vp_c7.data[int(temp_17)][temp_18];
    temp_20 = int(temp_16) + 1;
    temp_21 = uint(temp_20) >> 2;
    temp_22 = temp_20 & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    // 0x000050: 0xEF94007068870709 Ldc
    temp_24 = temp_5 + 0x688;
    temp_25 = uint(temp_24) >> 2;
    temp_26 = temp_25 >> 2;
    temp_27 = int(temp_25) & 3;
    temp_28 = vp_c7.data[int(temp_26)][temp_27];
    // 0x000058: 0xEF9400704887070A Ldc
    temp_29 = temp_5 + 0x488;
    temp_30 = uint(temp_29) >> 2;
    temp_31 = temp_30 >> 2;
    temp_32 = int(temp_30) & 3;
    temp_33 = vp_c7.data[int(temp_31)][temp_32];
    // 0x000068: 0x4C68101000070604 Fmul
    temp_34 = temp_0 * vp_c4.data[0].x;
    // 0x000070: 0xEFD87F801407FF07 Ald
    temp_35 = in_attr12.x;
    // 0x000078: 0x4C68101000470605 Fmul
    temp_36 = temp_0 * vp_c4.data[1].x;
    // 0x000088: 0x4C68101000870606 Fmul
    temp_37 = temp_0 * vp_c4.data[2].x;
    // 0x000090: 0x49A0021000170B04 Ffma
    temp_38 = fma(temp_3, vp_c4.data[0].y, temp_34);
    // 0x000098: 0x49A0029000570B05 Ffma
    temp_39 = fma(temp_3, vp_c4.data[1].y, temp_36);
    // 0x0000A8: 0x49A0031000970B08 Ffma
    temp_40 = fma(temp_3, vp_c4.data[2].y, temp_37);
    // 0x0000B0: 0xEFD87F8014C7FF0B Ald
    temp_41 = in_attr12.w;
    // 0x0000B8: 0x49A0021000270E04 Ffma
    temp_42 = fma(temp_4, vp_c4.data[0].z, temp_38);
    // 0x0000C8: 0x49A0029000670E06 Ffma
    temp_43 = fma(temp_4, vp_c4.data[1].z, temp_39);
    // 0x0000D0: 0x49A0041000A70E08 Ffma
    temp_44 = fma(temp_4, vp_c4.data[2].z, temp_40);
    // 0x0000D8: 0x4C58101000370405 Fadd
    temp_45 = temp_42 + vp_c4.data[0].w;
    // 0x0000E8: 0x4C58101000770606 Fadd
    temp_46 = temp_43 + vp_c4.data[1].w;
    // 0x0000F0: 0x4C58101000B70808 Fadd
    temp_47 = temp_44 + vp_c4.data[2].w;
    // 0x0000F8: 0x59A0000000270500 Ffma
    temp_48 = fma(temp_45, temp_19, temp_10);
    // 0x000108: 0x59A0008000370601 Ffma
    temp_49 = fma(temp_46, temp_23, temp_14);
    // 0x000110: 0x59A0048000A70808 Ffma
    temp_50 = fma(temp_47, temp_33, temp_28);
    // 0x000118: 0xEFD87F801447FF09 Ald
    temp_51 = in_attr12.y;
    // 0x000128: 0x4C68100C00070003 Fmul
    temp_52 = temp_48 * vp_c3.data[0].x;
    // 0x000130: 0xEFD87F801487FF0A Ald
    temp_53 = in_attr12.z;
    // 0x000138: 0x4C68100C00470004 Fmul
    temp_54 = temp_48 * vp_c3.data[1].x;
    // 0x000148: 0xEFF07F800807FF07 Ast
    out_attr0.x = temp_35;
    // 0x000150: 0x4C58101002070802 Fadd
    temp_55 = temp_50 + vp_c4.data[8].x;
    // 0x000158: 0xEFF07F8008C7FF0B Ast
    out_attr0.w = temp_41;
    // 0x000168: 0x49A0018C00170103 Ffma
    temp_56 = fma(temp_49, vp_c3.data[0].y, temp_52);
    // 0x000170: 0x4C68100C00870000 Fmul
    temp_57 = temp_48 * vp_c3.data[2].x;
    // 0x000178: 0x49A0020C00570104 Ffma
    temp_58 = fma(temp_49, vp_c3.data[1].y, temp_54);
    // 0x000188: 0x49A0018C00270203 Ffma
    temp_59 = fma(temp_55, vp_c3.data[0].z, temp_56);
    // 0x000190: 0xEFF07F800847FF09 Ast
    out_attr0.y = temp_51;
    // 0x000198: 0x49A0000C00970101 Ffma
    temp_60 = fma(temp_49, vp_c3.data[2].y, temp_57);
    // 0x0001A8: 0xEFF07F800887FF0A Ast
    out_attr0.z = temp_53;
    // 0x0001B0: 0x49A0020C00670204 Ffma
    temp_61 = fma(temp_55, vp_c3.data[1].z, temp_58);
    // 0x0001B8: 0x4C58100C00370303 Fadd
    temp_62 = temp_59 + vp_c3.data[0].w;
    // 0x0001C8: 0x49A0008C00A70202 Ffma
    temp_63 = fma(temp_55, vp_c3.data[2].z, temp_60);
    // 0x0001D0: 0x49A0008C00A70808 Ffma
    temp_64 = fma(temp_50, vp_c3.data[2].z, temp_60);
    // 0x0001D8: 0x4C68100C02870305 Fmul
    temp_65 = temp_62 * vp_c3.data[10].x;
    // 0x0001E8: 0x4C68100C02470306 Fmul
    temp_66 = temp_62 * vp_c3.data[9].x;
    // 0x0001F0: 0x4C68100C02070301 Fmul
    temp_67 = temp_62 * vp_c3.data[8].x;
    // 0x0001F8: 0x4C58100C00770404 Fadd
    temp_68 = temp_61 + vp_c3.data[1].w;
    // 0x000208: 0x4C68100C01C70303 Fmul
    temp_69 = temp_62 * vp_c3.data[7].x;
    // 0x000210: 0x4C58100C00B70202 Fadd
    temp_70 = temp_63 + vp_c3.data[2].w;
    // 0x000218: 0x4C58100C00B70808 Fadd
    temp_71 = temp_64 + vp_c3.data[2].w;
    // 0x000228: 0x49A0028C02970405 Ffma
    temp_72 = fma(temp_68, vp_c3.data[10].y, temp_65);
    // 0x000230: 0xEFF07F800987FF08 Ast
    out_attr1.z = temp_71;
    // 0x000238: 0x49A0030C02570400 Ffma
    temp_73 = fma(temp_68, vp_c3.data[9].y, temp_66);
    // 0x000248: 0x49A0008C02170401 Ffma
    temp_74 = fma(temp_68, vp_c3.data[8].y, temp_67);
    // 0x000250: 0x49A0018C01D70403 Ffma
    temp_75 = fma(temp_68, vp_c3.data[7].y, temp_69);
    // 0x000258: 0x49A0028C02A70205 Ffma
    temp_76 = fma(temp_70, vp_c3.data[10].z, temp_72);
    // 0x000268: 0x49A0000C02670200 Ffma
    temp_77 = fma(temp_70, vp_c3.data[9].z, temp_73);
    // 0x000270: 0x49A0008C02270201 Ffma
    temp_78 = fma(temp_70, vp_c3.data[8].z, temp_74);
    // 0x000278: 0x49A0018C01E70203 Ffma
    temp_79 = fma(temp_70, vp_c3.data[7].z, temp_75);
    // 0x000288: 0x4C58100C02B70505 Fadd
    temp_80 = temp_76 + vp_c3.data[10].w;
    // 0x000290: 0x4C58100C02770000 Fadd
    temp_81 = temp_77 + vp_c3.data[9].w;
    // 0x000298: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_80;
    // 0x0002A8: 0x4C58100C02370101 Fadd
    temp_82 = temp_78 + vp_c3.data[8].w;
    // 0x0002B0: 0xEFF07F800787FF00 Ast
    gl_Position.z = temp_81;
    // 0x0002B8: 0x4C58100C01F70303 Fadd
    temp_83 = temp_79 + vp_c3.data[7].w;
    // 0x0002C8: 0xEFF07F800747FF01 Ast
    gl_Position.y = temp_82;
    // 0x0002D0: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_83;
    // 0x0002D8: 0xE30000000007000F Exit
    return;
}
