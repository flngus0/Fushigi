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

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    int temp_8;
    int temp_9;
    uint temp_10;
    uint temp_11;
    int temp_12;
    precise float temp_13;
    int temp_14;
    uint temp_15;
    int temp_16;
    precise float temp_17;
    int temp_18;
    uint temp_19;
    uint temp_20;
    int temp_21;
    precise float temp_22;
    int temp_23;
    uint temp_24;
    int temp_25;
    precise float temp_26;
    int temp_27;
    uint temp_28;
    uint temp_29;
    int temp_30;
    precise float temp_31;
    int temp_32;
    uint temp_33;
    int temp_34;
    precise float temp_35;
    precise float temp_36;
    int temp_37;
    precise float temp_38;
    precise float temp_39;
    int temp_40;
    precise float temp_41;
    int temp_42;
    uint temp_43;
    uint temp_44;
    int temp_45;
    precise float temp_46;
    int temp_47;
    uint temp_48;
    int temp_49;
    precise float temp_50;
    precise float temp_51;
    int temp_52;
    uint temp_53;
    uint temp_54;
    int temp_55;
    precise float temp_56;
    int temp_57;
    uint temp_58;
    int temp_59;
    precise float temp_60;
    int temp_61;
    uint temp_62;
    uint temp_63;
    int temp_64;
    precise float temp_65;
    int temp_66;
    uint temp_67;
    uint temp_68;
    int temp_69;
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
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0xEFD87F800987FF0E Ald
    temp_0 = in_attr1.z;
    // 0x000010: 0xEFD87F800807FF0F Ald
    temp_1 = in_attr0.x;
    // 0x000018: 0xEFD87F800887FF10 Ald
    temp_2 = in_attr0.z;
    // 0x000028: 0xEFD87F800947FF11 Ald
    temp_3 = in_attr1.y;
    // 0x000030: 0xEFD87F800907FF14 Ald
    temp_4 = in_attr1.x;
    // 0x000038: 0x5CB0118000E71A00 F2i
    temp_5 = trunc(temp_0);
    temp_6 = int(temp_5);
    // 0x000048: 0xEFD87F800847FF0E Ald
    temp_7 = in_attr0.y;
    // 0x000050: 0x3848000000570008 Shl
    temp_8 = temp_6 << 5;
    // 0x000058: 0xEF95007005070800 Ldc
    temp_9 = temp_8 + 80;
    temp_10 = uint(temp_9) >> 2;
    temp_11 = temp_10 >> 2;
    temp_12 = int(temp_10) & 3;
    temp_13 = vp_c7.data[int(temp_11)][temp_12];
    temp_14 = int(temp_10) + 1;
    temp_15 = uint(temp_14) >> 2;
    temp_16 = temp_14 & 3;
    temp_17 = vp_c7.data[int(temp_15)][temp_16];
    // 0x000068: 0xEF9500700407080A Ldc
    temp_18 = temp_8 + 64;
    temp_19 = uint(temp_18) >> 2;
    temp_20 = temp_19 >> 2;
    temp_21 = int(temp_19) & 3;
    temp_22 = vp_c7.data[int(temp_20)][temp_21];
    temp_23 = int(temp_19) + 1;
    temp_24 = uint(temp_23) >> 2;
    temp_25 = temp_23 & 3;
    temp_26 = vp_c7.data[int(temp_24)][temp_25];
    // 0x000070: 0xEF95007004870802 Ldc
    temp_27 = temp_8 + 72;
    temp_28 = uint(temp_27) >> 2;
    temp_29 = temp_28 >> 2;
    temp_30 = int(temp_28) & 3;
    temp_31 = vp_c7.data[int(temp_29)][temp_30];
    temp_32 = int(temp_28) + 1;
    temp_33 = uint(temp_32) >> 2;
    temp_34 = temp_32 & 3;
    temp_35 = vp_c7.data[int(temp_33)][temp_34];
    // 0x000078: 0x5CB0118000171A01 F2i
    temp_36 = trunc(temp_17);
    temp_37 = int(temp_36);
    // 0x000088: 0xEFF07F8011C7FF00 Ast
    out_attr9.w = temp_13;
    // 0x000090: 0x5C58100001070202 Fadd
    temp_38 = temp_31 + temp_2;
    // 0x000098: 0x4C58101008E70202 Fadd
    temp_39 = temp_38 + vp_c4.data[35].z;
    // 0x0000A8: 0x3848000000470109 Shl
    temp_40 = temp_37 << 4;
    // 0x0000B0: 0x5C58100000F70A01 Fadd
    temp_41 = temp_22 + temp_1;
    // 0x0000B8: 0xEF95006068070904 Ldc
    temp_42 = temp_40 + 0x680;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_43 >> 2;
    temp_45 = int(temp_43) & 3;
    temp_46 = vp_c6.data[int(temp_44)][temp_45];
    temp_47 = int(temp_43) + 1;
    temp_48 = uint(temp_47) >> 2;
    temp_49 = temp_47 & 3;
    temp_50 = vp_c6.data[int(temp_48)][temp_49];
    // 0x0000C8: 0x5C58100000E70B0A Fadd
    temp_51 = temp_26 + temp_7;
    // 0x0000D0: 0xEF95006048070906 Ldc
    temp_52 = temp_40 + 0x480;
    temp_53 = uint(temp_52) >> 2;
    temp_54 = temp_53 >> 2;
    temp_55 = int(temp_53) & 3;
    temp_56 = vp_c6.data[int(temp_54)][temp_55];
    temp_57 = int(temp_53) + 1;
    temp_58 = uint(temp_57) >> 2;
    temp_59 = temp_57 & 3;
    temp_60 = vp_c6.data[int(temp_58)][temp_59];
    // 0x0000D8: 0x0103F8000007F00F Mov32i
    // 0x0000E8: 0xEF9400606887090C Ldc
    temp_61 = temp_40 + 0x688;
    temp_62 = uint(temp_61) >> 2;
    temp_63 = temp_62 >> 2;
    temp_64 = int(temp_62) & 3;
    temp_65 = vp_c6.data[int(temp_63)][temp_64];
    // 0x0000F0: 0xEF9400604887090D Ldc
    temp_66 = temp_40 + 0x488;
    temp_67 = uint(temp_66) >> 2;
    temp_68 = temp_67 >> 2;
    temp_69 = int(temp_67) & 3;
    temp_70 = vp_c6.data[int(temp_68)][temp_69];
    // 0x0000F8: 0x4C9807900037000B Mov
    // 0x000108: 0xEFF07F800887FF0F Ast
    out_attr0.z = 1.0;
    // 0x000110: 0xEFF07F800907FF0F Ast
    out_attr1.x = 1.0;
    // 0x000118: 0xEFF07F800A47FF0F Ast
    out_attr2.y = 1.0;
    // 0x000128: 0x59A0020000670101 Ffma
    temp_71 = fma(temp_41, temp_56, temp_46);
    // 0x000130: 0x4C98079000270006 Mov
    // 0x000138: 0xEFF07F800D07FF01 Ast
    out_attr5.x = temp_71;
    // 0x000148: 0x59A0028000770A05 Ffma
    temp_72 = fma(temp_51, temp_60, temp_50);
    // 0x000150: 0x4C5830140B070104 Fadd
    temp_73 = 0.0 - vp_c5.data[44].x;
    temp_74 = temp_71 + temp_73;
    // 0x000158: 0xEFF07F800D47FF05 Ast
    out_attr5.y = temp_72;
    // 0x000168: 0x51A0031000471107 Ffma
    temp_75 = fma(temp_3, vp_c4.data[0].z, vp_c4.data[1].x);
    // 0x000170: 0x4C5830140B170506 Fadd
    temp_76 = 0.0 - vp_c5.data[44].y;
    temp_77 = temp_72 + temp_76;
    // 0x000178: 0x4C68100C00070108 Fmul
    temp_78 = temp_71 * vp_c3.data[0].x;
    // 0x000188: 0x59A0060000D70202 Ffma
    temp_79 = fma(temp_39, temp_70, temp_65);
    // 0x000190: 0x51A005900057110A Ffma
    temp_80 = fma(temp_3, vp_c4.data[0].w, vp_c4.data[1].y);
    // 0x000198: 0xEFF07F800D87FF02 Ast
    out_attr5.z = temp_79;
    // 0x0001A8: 0x4C68101403870404 Fmul
    temp_81 = temp_74 * vp_c5.data[14].x;
    // 0x0001B0: 0x49A0040C0017050C Ffma
    temp_82 = fma(temp_72, vp_c3.data[0].y, temp_78);
    // 0x0001B8: 0x49A0039000071409 Ffma
    temp_83 = fma(temp_4, vp_c4.data[0].x, temp_75);
    // 0x0001C8: 0x4C68100C00870107 Fmul
    temp_84 = temp_71 * vp_c3.data[2].x;
    // 0x0001D0: 0xEFF07F800E07FF09 Ast
    out_attr6.x = temp_83;
    // 0x0001D8: 0x49A0021403970604 Ffma
    temp_85 = fma(temp_77, vp_c5.data[14].y, temp_81);
    // 0x0001E8: 0x4C68100C00470106 Fmul
    temp_86 = temp_71 * vp_c3.data[1].x;
    // 0x0001F0: 0x4C5810140BA7020B Fadd
    temp_87 = temp_79 + vp_c5.data[46].z;
    // 0x0001F8: 0x49A005100017140E Ffma
    temp_88 = fma(temp_4, vp_c4.data[0].y, temp_80);
    // 0x000208: 0x4C5810140B97050A Fadd
    temp_89 = temp_72 + vp_c5.data[46].y;
    // 0x000210: 0xEFF07F800E47FF0E Ast
    out_attr6.y = temp_88;
    // 0x000218: 0x49A0030C00570508 Ffma
    temp_90 = fma(temp_72, vp_c3.data[1].y, temp_86);
    // 0x000228: 0x49A0060C00270206 Ffma
    temp_91 = fma(temp_79, vp_c3.data[0].z, temp_82);
    // 0x000230: 0x49A0038C00970509 Ffma
    temp_92 = fma(temp_72, vp_c3.data[2].y, temp_84);
    // 0x000238: 0x4C6810140C670B0D Fmul
    temp_93 = temp_87 * vp_c5.data[49].z;
    // 0x000248: 0x4C6810140C270B07 Fmul
    temp_94 = temp_87 * vp_c5.data[48].z;
    // 0x000250: 0x4C6810140CA70B0B Fmul
    temp_95 = temp_87 * vp_c5.data[50].z;
    // 0x000258: 0x5C58100000270303 Fadd
    temp_96 = temp_35 + temp_79;
    // 0x000268: 0x49A0040C0067020E Ffma
    temp_97 = fma(temp_79, vp_c3.data[1].z, temp_90);
    // 0x000270: 0x4C58100C00370606 Fadd
    temp_98 = temp_91 + vp_c3.data[0].w;
    // 0x000278: 0x49A006940C570A0D Ffma
    temp_99 = fma(temp_89, vp_c5.data[49].y, temp_93);
    // 0x000288: 0x49A003940C170A07 Ffma
    temp_100 = fma(temp_89, vp_c5.data[48].y, temp_94);
    // 0x000290: 0x49A005940C970A0B Ffma
    temp_101 = fma(temp_89, vp_c5.data[50].y, temp_95);
    // 0x000298: 0x4C58300C03370510 Fadd
    temp_102 = 0.0 - vp_c3.data[12].w;
    temp_103 = temp_72 + temp_102;
    // 0x0002A8: 0x4C5830140B27020A Fadd
    temp_104 = 0.0 - vp_c5.data[44].z;
    temp_105 = temp_79 + temp_104;
    // 0x0002B0: 0xEFF07F800B47FF10 Ast
    out_attr3.y = temp_103;
    // 0x0002B8: 0x4C58100C00770E0E Fadd
    temp_106 = temp_97 + vp_c3.data[1].w;
    // 0x0002C8: 0x4C68101402C70605 Fmul
    temp_107 = temp_98 * vp_c5.data[11].x;
    // 0x0002D0: 0x49A0060C0027030C Ffma
    temp_108 = fma(temp_96, vp_c3.data[0].z, temp_82);
    // 0x0002D8: 0x4C98079403C70006 Mov
    // 0x0002E8: 0x49A0040C00670308 Ffma
    temp_109 = fma(temp_96, vp_c3.data[1].z, temp_90);
    // 0x0002F0: 0x49A0021403A70A04 Ffma
    temp_110 = fma(temp_105, vp_c5.data[14].z, temp_85);
    // 0x0002F8: 0x49A0048C00A70303 Ffma
    temp_111 = fma(temp_96, vp_c3.data[2].z, temp_92);
    // 0x000308: 0x49A0029402D70E0E Ffma
    temp_112 = fma(temp_106, vp_c5.data[11].y, temp_107);
    // 0x000310: 0x4C58100C00370C0C Fadd
    temp_113 = temp_108 + vp_c3.data[0].w;
    // 0x000318: 0x4C58300C03770205 Fadd
    temp_114 = 0.0 - vp_c3.data[13].w;
    temp_115 = temp_79 + temp_114;
    // 0x000328: 0x4C58300C02F7010F Fadd
    temp_116 = 0.0 - vp_c3.data[11].w;
    temp_117 = temp_71 + temp_116;
    // 0x000330: 0xEFF07F800B87FF05 Ast
    out_attr3.z = temp_115;
    // 0x000338: 0x49A0048C00A70209 Ffma
    temp_118 = fma(temp_79, vp_c3.data[2].z, temp_92);
    // 0x000348: 0xEFF07F800B07FF0F Ast
    out_attr3.x = temp_117;
    // 0x000350: 0x4C5810140B870100 Fadd
    temp_119 = temp_71 + vp_c5.data[46].x;
    // 0x000358: 0x51A0031403B70404 Ffma
    temp_120 = fma(temp_110, vp_c5.data[15].x, vp_c5.data[14].w);
    // 0x000368: 0x4C58100C00770808 Fadd
    temp_121 = temp_109 + vp_c3.data[1].w;
    // 0x000370: 0xEFF07F801047FF04 Ast
    out_attr8.y = temp_120;
    // 0x000378: 0x4C68100C02470C01 Fmul
    temp_122 = temp_113 * vp_c3.data[9].x;
    // 0x000388: 0x4C68100C01C70C02 Fmul
    temp_123 = temp_113 * vp_c3.data[7].x;
    // 0x000390: 0x4C68100C02870C05 Fmul
    temp_124 = temp_113 * vp_c3.data[10].x;
    // 0x000398: 0x4C68100C02070C06 Fmul
    temp_125 = temp_113 * vp_c3.data[8].x;
    // 0x0003A8: 0x4C58100C00B70909 Fadd
    temp_126 = temp_118 + vp_c3.data[2].w;
    // 0x0003B0: 0x4C58100C00B70303 Fadd
    temp_127 = temp_111 + vp_c3.data[2].w;
    // 0x0003B8: 0xEFF07F800C87FF09 Ast
    out_attr4.z = temp_126;
    // 0x0003C8: 0x49A0008C02570801 Ffma
    temp_128 = fma(temp_121, vp_c3.data[9].y, temp_122);
    // 0x0003D0: 0x49A0010C01D70802 Ffma
    temp_129 = fma(temp_121, vp_c3.data[7].y, temp_123);
    // 0x0003D8: 0x49A0028C02970805 Ffma
    temp_130 = fma(temp_121, vp_c3.data[10].y, temp_124);
    // 0x0003E8: 0x49A0030C02170806 Ffma
    temp_131 = fma(temp_121, vp_c3.data[8].y, temp_125);
    // 0x0003F0: 0x49A006940C47000D Ffma
    temp_132 = fma(temp_119, vp_c5.data[49].x, temp_99);
    // 0x0003F8: 0x49A005940C87000B Ffma
    temp_133 = fma(temp_119, vp_c5.data[50].x, temp_101);
    // 0x000408: 0x49A003940C070007 Ffma
    temp_134 = fma(temp_119, vp_c5.data[48].x, temp_100);
    // 0x000410: 0x49A0071402E7090E Ffma
    temp_135 = fma(temp_126, vp_c5.data[11].z, temp_112);
    // 0x000418: 0x4C98079403070000 Mov
    // 0x000428: 0x49A0008C02670301 Ffma
    temp_136 = fma(temp_127, vp_c3.data[9].z, temp_128);
    // 0x000430: 0x49A0010C01E70302 Ffma
    temp_137 = fma(temp_127, vp_c3.data[7].z, temp_129);
    // 0x000438: 0x49A0028C02A70305 Ffma
    temp_138 = fma(temp_127, vp_c3.data[10].z, temp_130);
    // 0x000448: 0x49A0030C02270306 Ffma
    temp_139 = fma(temp_127, vp_c3.data[8].z, temp_131);
    // 0x000450: 0x4C6810140BB70D0D Fmul
    temp_140 = temp_132 * vp_c5.data[46].w;
    // 0x000458: 0x4C6810140BB70707 Fmul
    temp_141 = temp_134 * vp_c5.data[46].w;
    // 0x000468: 0xEFF07F801247FF0D Ast
    out_attr10.y = temp_140;
    // 0x000470: 0x4C6810140BB70B0B Fmul
    temp_142 = temp_133 * vp_c5.data[46].w;
    // 0x000478: 0xEFF07F801207FF07 Ast
    out_attr10.x = temp_141;
    // 0x000488: 0x51A0001402F70E0E Ffma
    temp_143 = fma(temp_135, vp_c5.data[12].x, vp_c5.data[11].w);
    // 0x000490: 0xEFF07F801287FF0B Ast
    out_attr10.z = temp_142;
    // 0x000498: 0x4C58100C02770101 Fadd
    temp_144 = temp_136 + vp_c3.data[9].w;
    // 0x0004A8: 0xEFF07F801007FF0E Ast
    out_attr8.x = temp_143;
    // 0x0004B0: 0x4C58100C01F70202 Fadd
    temp_145 = temp_137 + vp_c3.data[7].w;
    // 0x0004B8: 0xEFF07F800787FF01 Ast
    gl_Position.z = temp_144;
    // 0x0004C8: 0x4C58100C02B70505 Fadd
    temp_146 = temp_138 + vp_c3.data[10].w;
    // 0x0004D0: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_145;
    // 0x0004D8: 0x4C58100C02370606 Fadd
    temp_147 = temp_139 + vp_c3.data[8].w;
    // 0x0004E8: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_146;
    // 0x0004F0: 0xEFF07F800747FF06 Ast
    gl_Position.y = temp_147;
    // 0x0004F8: 0xE30000000007000F Exit
    return;
}
