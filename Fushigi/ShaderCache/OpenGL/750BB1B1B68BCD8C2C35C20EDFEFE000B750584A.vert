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

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (location = 0) in vec4 in_attr0;
layout (location = 8) in vec4 in_attr8;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    int temp_8;
    uint temp_9;
    uint temp_10;
    int temp_11;
    precise float temp_12;
    int temp_13;
    uint temp_14;
    int temp_15;
    precise float temp_16;
    int temp_17;
    uint temp_18;
    uint temp_19;
    int temp_20;
    precise float temp_21;
    int temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    int temp_26;
    uint temp_27;
    uint temp_28;
    int temp_29;
    precise float temp_30;
    int temp_31;
    uint temp_32;
    uint temp_33;
    int temp_34;
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
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0xEFD87F800807FF08 Ald
    temp_0 = in_attr0.x;
    // 0x000010: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000018: 0xEFD87F800847FF0A Ald
    temp_3 = in_attr0.y;
    // 0x000028: 0xEFD87F800887FF11 Ald
    temp_4 = in_attr0.z;
    // 0x000030: 0xEFD87F801407FF0E Ald
    temp_5 = in_attr12.x;
    // 0x000038: 0x3848000000470009 Shl
    temp_6 = temp_2 << 4;
    // 0x000048: 0xEFD87F801447FF0F Ald
    temp_7 = in_attr12.y;
    // 0x000050: 0xEF95007068070900 Ldc
    temp_8 = temp_6 + 0x680;
    temp_9 = uint(temp_8) >> 2;
    temp_10 = temp_9 >> 2;
    temp_11 = int(temp_9) & 3;
    temp_12 = vp_c7.data[int(temp_10)][temp_11];
    temp_13 = int(temp_9) + 1;
    temp_14 = uint(temp_13) >> 2;
    temp_15 = temp_13 & 3;
    temp_16 = vp_c7.data[int(temp_14)][temp_15];
    // 0x000058: 0xEF95007048070902 Ldc
    temp_17 = temp_6 + 0x480;
    temp_18 = uint(temp_17) >> 2;
    temp_19 = temp_18 >> 2;
    temp_20 = int(temp_18) & 3;
    temp_21 = vp_c7.data[int(temp_19)][temp_20];
    temp_22 = int(temp_18) + 1;
    temp_23 = uint(temp_22) >> 2;
    temp_24 = temp_22 & 3;
    temp_25 = vp_c7.data[int(temp_23)][temp_24];
    // 0x000068: 0xEF9400706887090B Ldc
    temp_26 = temp_6 + 0x688;
    temp_27 = uint(temp_26) >> 2;
    temp_28 = temp_27 >> 2;
    temp_29 = int(temp_27) & 3;
    temp_30 = vp_c7.data[int(temp_28)][temp_29];
    // 0x000070: 0xEF9400704887090D Ldc
    temp_31 = temp_6 + 0x488;
    temp_32 = uint(temp_31) >> 2;
    temp_33 = temp_32 >> 2;
    temp_34 = int(temp_32) & 3;
    temp_35 = vp_c7.data[int(temp_33)][temp_34];
    // 0x000078: 0x4C68101000070804 Fmul
    temp_36 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F801487FF10 Ald
    temp_37 = in_attr12.z;
    // 0x000090: 0x4C68101000470805 Fmul
    temp_38 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0x4C68101000870808 Fmul
    temp_39 = temp_0 * vp_c4.data[2].x;
    // 0x0000A8: 0x49A0021000170A04 Ffma
    temp_40 = fma(temp_3, vp_c4.data[0].y, temp_36);
    // 0x0000B0: 0x49A0029000570A07 Ffma
    temp_41 = fma(temp_3, vp_c4.data[1].y, temp_38);
    // 0x0000B8: 0xEFD87F801047FF05 Ald
    temp_42 = in_attr8.y;
    // 0x0000C8: 0x49A0041000970A0A Ffma
    temp_43 = fma(temp_3, vp_c4.data[2].y, temp_39);
    // 0x0000D0: 0x49A0021000271106 Ffma
    temp_44 = fma(temp_4, vp_c4.data[0].z, temp_40);
    // 0x0000D8: 0xEFD87F801007FF04 Ald
    temp_45 = in_attr8.x;
    // 0x0000E8: 0x49A0039000671108 Ffma
    temp_46 = fma(temp_4, vp_c4.data[1].z, temp_41);
    // 0x0000F0: 0xEFF07F800807FF0E Ast
    out_attr0.x = temp_5;
    // 0x0000F8: 0x49A0051000A7110A Ffma
    temp_47 = fma(temp_4, vp_c4.data[2].z, temp_43);
    // 0x000108: 0xEFF07F800847FF0F Ast
    out_attr0.y = temp_7;
    // 0x000110: 0x4C58101000370607 Fadd
    temp_48 = temp_44 + vp_c4.data[0].w;
    // 0x000118: 0xEFF07F800887FF10 Ast
    out_attr0.z = temp_37;
    // 0x000128: 0x4C58101000770808 Fadd
    temp_49 = temp_46 + vp_c4.data[1].w;
    // 0x000130: 0x59A0000000270702 Ffma
    temp_50 = fma(temp_48, temp_21, temp_12);
    // 0x000138: 0x4C58101000B70A00 Fadd
    temp_51 = temp_47 + vp_c4.data[2].w;
    // 0x000148: 0x59A0008000370801 Ffma
    temp_52 = fma(temp_49, temp_25, temp_16);
    // 0x000150: 0x4C9807940027000A Mov
    // 0x000158: 0x4C68100C00070206 Fmul
    temp_53 = temp_50 * vp_c3.data[0].x;
    // 0x000168: 0x59A0058000D70000 Ffma
    temp_54 = fma(temp_51, temp_35, temp_30);
    // 0x000170: 0x4C68100C00470203 Fmul
    temp_55 = temp_50 * vp_c3.data[1].x;
    // 0x000178: 0x4C68100C00870208 Fmul
    temp_56 = temp_50 * vp_c3.data[2].x;
    // 0x000188: 0x4C9807940037000B Mov
    // 0x000190: 0x51A005140047050A Ffma
    temp_57 = fma(temp_42, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000198: 0x49A0030C00170107 Ffma
    temp_58 = fma(temp_52, vp_c3.data[0].y, temp_53);
    // 0x0001A8: 0x4C58101002070002 Fadd
    temp_59 = temp_54 + vp_c4.data[8].x;
    // 0x0001B0: 0x49A0018C00570103 Ffma
    temp_60 = fma(temp_52, vp_c3.data[1].y, temp_55);
    // 0x0001B8: 0x49A0040C00970101 Ffma
    temp_61 = fma(temp_52, vp_c3.data[2].y, temp_56);
    // 0x0001C8: 0x4C98079400A70006 Mov
    // 0x0001D0: 0x4C98079400B70008 Mov
    // 0x0001D8: 0x51A005940057050B Ffma
    temp_62 = fma(temp_42, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0001E8: 0x49A0038C00270207 Ffma
    temp_63 = fma(temp_59, vp_c3.data[0].z, temp_58);
    // 0x0001F0: 0x49A0018C00670203 Ffma
    temp_64 = fma(temp_59, vp_c3.data[1].z, temp_60);
    // 0x0001F8: 0x49A0008C00A70202 Ffma
    temp_65 = fma(temp_59, vp_c3.data[2].z, temp_61);
    // 0x000208: 0x51A0031400C70506 Ffma
    temp_66 = fma(temp_42, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x000210: 0x51A0041400D70509 Ffma
    temp_67 = fma(temp_42, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x000218: 0x49A005140007040A Ffma
    temp_68 = fma(temp_45, vp_c5.data[0].x, temp_57);
    // 0x000228: 0x4C58100C00370707 Fadd
    temp_69 = temp_63 + vp_c3.data[0].w;
    // 0x000230: 0xEFF07F800A07FF0A Ast
    out_attr2.x = temp_68;
    // 0x000238: 0x49A003140087040C Ffma
    temp_70 = fma(temp_45, vp_c5.data[2].x, temp_66);
    // 0x000248: 0x49A0049400970409 Ffma
    temp_71 = fma(temp_45, vp_c5.data[2].y, temp_67);
    // 0x000250: 0xEFF07F800A87FF0C Ast
    out_attr2.z = temp_70;
    // 0x000258: 0x49A0008C00A70000 Ffma
    temp_72 = fma(temp_54, vp_c3.data[2].z, temp_61);
    // 0x000268: 0xEFF07F800AC7FF09 Ast
    out_attr2.w = temp_71;
    // 0x000270: 0x49A005940017040B Ffma
    temp_73 = fma(temp_45, vp_c5.data[0].y, temp_62);
    // 0x000278: 0x4C58100C00770303 Fadd
    temp_74 = temp_64 + vp_c3.data[1].w;
    // 0x000288: 0xEFF07F800A47FF0B Ast
    out_attr2.y = temp_73;
    // 0x000290: 0x4C68100C02870706 Fmul
    temp_75 = temp_69 * vp_c3.data[10].x;
    // 0x000298: 0x4C68100C02470708 Fmul
    temp_76 = temp_69 * vp_c3.data[9].x;
    // 0x0002A8: 0x4C68100C02070701 Fmul
    temp_77 = temp_69 * vp_c3.data[8].x;
    // 0x0002B0: 0x4C68100C01C70704 Fmul
    temp_78 = temp_69 * vp_c3.data[7].x;
    // 0x0002B8: 0x4C58100C00B70202 Fadd
    temp_79 = temp_65 + vp_c3.data[2].w;
    // 0x0002C8: 0x4C58100C00B70000 Fadd
    temp_80 = temp_72 + vp_c3.data[2].w;
    // 0x0002D0: 0x49A0030C02970305 Ffma
    temp_81 = fma(temp_74, vp_c3.data[10].y, temp_75);
    // 0x0002D8: 0xEFF07F800987FF00 Ast
    out_attr1.z = temp_80;
    // 0x0002E8: 0x49A0040C02570308 Ffma
    temp_82 = fma(temp_74, vp_c3.data[9].y, temp_76);
    // 0x0002F0: 0x49A0008C02170301 Ffma
    temp_83 = fma(temp_74, vp_c3.data[8].y, temp_77);
    // 0x0002F8: 0x49A0020C01D70304 Ffma
    temp_84 = fma(temp_74, vp_c3.data[7].y, temp_78);
    // 0x000308: 0x49A0028C02A70205 Ffma
    temp_85 = fma(temp_79, vp_c3.data[10].z, temp_81);
    // 0x000310: 0x49A0040C02670208 Ffma
    temp_86 = fma(temp_79, vp_c3.data[9].z, temp_82);
    // 0x000318: 0x49A0008C02270201 Ffma
    temp_87 = fma(temp_79, vp_c3.data[8].z, temp_83);
    // 0x000328: 0x49A0020C01E70204 Ffma
    temp_88 = fma(temp_79, vp_c3.data[7].z, temp_84);
    // 0x000330: 0x4C58100C02B70505 Fadd
    temp_89 = temp_85 + vp_c3.data[10].w;
    // 0x000338: 0x4C58100C02770808 Fadd
    temp_90 = temp_86 + vp_c3.data[9].w;
    // 0x000348: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_89;
    // 0x000350: 0x4C58100C02370101 Fadd
    temp_91 = temp_87 + vp_c3.data[8].w;
    // 0x000358: 0xEFF07F800787FF08 Ast
    gl_Position.z = temp_90;
    // 0x000368: 0x4C58100C01F70404 Fadd
    temp_92 = temp_88 + vp_c3.data[7].w;
    // 0x000370: 0xEFF07F800747FF01 Ast
    gl_Position.y = temp_91;
    // 0x000378: 0xEFF07F800707FF04 Ast
    gl_Position.x = temp_92;
    // 0x000388: 0xE30000000007000F Exit
    return;
}
